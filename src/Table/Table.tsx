import React from 'react';
import {
  Table,
  Column,
  Cell,
  HeaderCell,
  ColumnGroup,
  TableProps,
  RowDataType,
  TableInstance,
  CellProps as TableCellProps,
  RowKeyType
} from 'rsuite-table';

import { useCustom } from '../utils';

export interface CellProps<Row extends RowDataType>
  extends Omit<TableCellProps<Row>, 'rowData' | 'dataKey'> {
  /** Data binding key, but also a sort of key */
  dataKey?: string | keyof Row;

  /** Row Data */
  rowData?: Row;
}

const CustomTable = React.forwardRef((props, ref) => {
  const { locale: localeProp, loadAnimation = true, ...rest } = props;
  const { locale, rtl } = useCustom('Table', localeProp);

  return <Table {...rest} rtl={rtl} ref={ref} locale={locale} loadAnimation={loadAnimation} />;
}) as <Row extends RowDataType, Key extends RowKeyType>(
  props: TableProps<Row, Key> & React.RefAttributes<TableInstance<Row, Key>>
) => React.ReactElement;

export default Object.assign(CustomTable, {
  Cell,
  Column,
  HeaderCell,
  ColumnGroup
});
