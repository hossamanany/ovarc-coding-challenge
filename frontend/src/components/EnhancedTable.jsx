import React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";

const EnhancedTableHead = ({
  columns,
  order,
  orderBy,
  onRequestSort,
  onSelectAllClick,
  numSelected,
  rowCount,
}) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            sortDirection={orderBy === column.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : "asc"}
              onClick={createSortHandler(column.id)}
            >
              {column.label}
              {orderBy === column.id ? (
                <span style={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTable = ({ columns = [], data = [] }) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(
    columns.length > 0 ? columns[0].id : ""
  );
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedItems = data.map((n) => n.id); // Change 'name' to 'id' or your unique key
      setSelected(newSelectedItems);
      console.log("All selected:", newSelectedItems);
    } else {
      setSelected([]);
      console.log("All deselected");
    }
  };

  const handleCheckboxClick = (event, id) => {
    event.stopPropagation(); // Prevent row click
    setSelected((prevSelected) => {
      const selectedIndex = prevSelected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(prevSelected, id); // Add
      } else {
        newSelected = newSelected.concat(
          prevSelected.slice(0, selectedIndex),
          prevSelected.slice(selectedIndex + 1)
        ); // Remove
      }

      console.log("Updated selected:", newSelected); // Debugging log
      return newSelected;
    });
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const sortedRows = React.useMemo(() => {
    const rows = [...data];
    if (orderBy) {
      return rows.sort((a, b) => {
        if (a[orderBy] < b[orderBy]) {
          return order === "asc" ? -1 : 1;
        }
        if (a[orderBy] > b[orderBy]) {
          return order === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return rows;
  }, [data, order, orderBy]);

  return (
    <TableContainer style={{ backgroundColor: "white" }}>
      <Table>
        <EnhancedTableHead
          columns={columns}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          onSelectAllClick={handleSelectAllClick}
          numSelected={selected.length}
          rowCount={data.length}
        />
        <TableBody>
          {sortedRows.map((row, index) => {
            const isItemSelected = isSelected(row.id); // Change 'name' to 'id' or your unique key
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableRow
                key={row.id} // Use unique 'id' for key
                hover
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isItemSelected}
                    onClick={(e) => handleCheckboxClick(e, row.id)} // Change 'name' to 'id' or your unique key
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ color: "grey", fontWeight: "normal" }}
                  >
                    {row[column.id]}
                  </TableCell>
                ))}
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    style={{
                      backgroundColor: "#BF5523",
                      color: "white",
                      marginRight: "8px",
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    style={{ backgroundColor: "#BF5523", color: "white" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

EnhancedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Ensure you have a unique id for each row
      name: PropTypes.string,
      author: PropTypes.string,
      year: PropTypes.number,
      // Add other properties as necessary
    })
  ).isRequired,
};

export default EnhancedTable;
