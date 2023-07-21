import * as React from "react";
import bson from "bson";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { updateExistingPotluck } from "../api/potluckAPI";
import { randomRecipeGet } from "../api/recipeAPIs";
import AlertPopup from "./AlertPopup";

// add new
function EditToolbar(props) {
  const { setRows, setRowModesModel, type } = props;

  const handleClick = () => {
    const _id = new bson.ObjectId().toString();
    console.log(_id);
    setRows((oldRows) => [
      ...oldRows,
      {
        _id: _id,
        id: _id,
        item: props.potluck.choiceStyle,
        responsible: "",
        notes: "",
        isNew: false,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [_id]: { mode: GridRowModes.View, fieldToFocus: "item" },
    }));
  };

  return (
    <GridToolbarContainer>
      <b>{type}</b>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add new item
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function FullFeaturedCrudGrid({
  setPotluck,
  potluck,
  dishes,
  type,
}) {
  const [rows, setRows] = React.useState(potluck[type]);
  const [activeId, setActiveId] = React.useState();
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const oldPotluck = potluck;
    console.log("at use effect", rows);
    oldPotluck[type] = rows;
    setPotluck(oldPotluck);
    console.log("at useE", oldPotluck);
    updateExistingPotluck(potluck);

    return () => {};
  }, [rows]);

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    // console.log("edit Click id", id);
    // console.log("edit Click row model:", rowModesModel);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    // console.log("edit Click rowmodel after set row model:", rowModesModel);
  };

  const handleSearchClick = (id) => async () => {
    console.log("Search Id", id);
    // console.log(rowModesModel);
    //setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    const randomRecipe = await randomRecipeGet();
    console.log(randomRecipe);
    const addRecipe = {
      recipeName: randomRecipe.recipes[0].title,
      link: randomRecipe.recipes[0].id,
    };

    await setRows(
      rows.map((row) => (row._id === id ? { ...row, ...addRecipe } : row))
    );
    console.log("after Search Rows: ", rows);
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => async () => {
    setActiveId(id);
    setOpen(true);
    // setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row._id === newRow._id ? updatedRow : row)));

    return updatedRow;
  };

  const columns = [
    { field: "item", headerName: "Requested", width: 70, editable: true },
    {
      field: "recipeName",
      headerName: "Recipe Name",
      flex: 0.5,
      type: "string",
      editable: true,
    },
    {
      field: "responsible",
      headerName: "Taken By",
      flex: 0.5,
      type: "string",
      editable: true,
    },
    {
      field: "notes",
      headerName: "notes",
      type: "string",
      flex: 1,
      editable: true,
    },
    {
      field: "link",
      headerName: "Potlucker Recipe",
      width: 80,
      editable: false,
      renderCell: (params) => (
        <>
          {params.value ? (
            <a
              href={`../FullRecipe/${params.value}`}
              className="btn btn--green"
              style={{
                paddingTop: "4px",
                paddingBottom: "4px",
                paddingLeft: "6px",
                paddingRight: "6px",
              }}
            >
              link{" "}
            </a>
          ) : (
            ""
          )}
        </>
      ),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<SearchIcon />}
            label="Search"
            className="textPrimary"
            onClick={handleSearchClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        width: "90%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        autoHeight={true}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel, type, potluck },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />

      <AlertPopup
        open={open}
        setOpen={setOpen}
        rows={rows}
        setRows={setRows}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    </Box>
  );
}
