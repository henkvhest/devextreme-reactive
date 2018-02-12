import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TableRow } from 'material-ui/Table';

export const TableSelectRow = ({
  selected,
  children,
  style,
  onToggle,
  selectByRowClick,
}) => (
  <TableRow
    style={style}
    selected={selected}
    onClick={(e) => {
      if (!selectByRowClick) return;
      e.stopPropagation();
      onToggle();
    }}
  >
    {children}
  </TableRow>
);

TableSelectRow.propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func,
  selected: PropTypes.bool,
  selectByRowClick: PropTypes.bool,
  style: PropTypes.object,
};

TableSelectRow.defaultProps = {
  children: undefined,
  onToggle: () => {},
  selected: false,
  selectByRowClick: false,
  style: null,
};