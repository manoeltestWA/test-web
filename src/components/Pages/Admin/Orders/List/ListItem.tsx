import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { IOption } from 'components/Shared/DropdownMenu';
import TableCellActions from 'components/Shared/Pagination/TableCellActions';
import IOrder from 'interfaces/models/order';
import EditIcon from 'mdi-react/EditIcon';
import React, { memo, useCallback, useMemo, useState } from 'react';

interface IProps {
  order: IOrder;
  onEdit: (order: IOrder) => void;
}

const ListItem = memo((props: IProps) => {
  const { order, onEdit } = props;
  const [error, setError] = useState(false);

  const handleDismissError = useCallback(() => setError(null), []);

  const handleEdit = useCallback(() => {
    onEdit(order);
  }, [onEdit, order]);

  const options = useMemo<IOption[]>(() => {
    return [
      { text: 'Editar', icon: EditIcon, handler: handleEdit },
    ];
  }, [handleEdit]);

  return (
    <TableRow>
      <TableCell>{order.description}</TableCell>
      <TableCell>{order.number}</TableCell>
      <TableCellActions options={options} error={error} onDismissError={handleDismissError} />
    </TableRow>
  );
});

export default ListItem;
