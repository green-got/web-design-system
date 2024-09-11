import React, { useState } from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from './Table';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Table',
} satisfies StoryDefault;

export const TableMain: Story = () => {
  const columns = [
    { field: 'a', label: 'Column A' },
    { field: 'b', label: 'Column B' },
    { field: 'c', label: 'Column C' },
    { field: 'd', label: 'Column D' },
  ];
  const data = [
    { id: 0, a: 'Test A', b: 'Test B', c: 'Test C', d: 'Test D' },
    { id: 1, a: 'Second A', b: 'Second B', c: 'Second C', d: 'Second D' },
    { id: 2, a: 'Third A', b: 'Third B', c: 'Third C', d: 'Third D' },
    { id: 3, a: 'Fourth A', b: 'Fourth B', c: 'Fourth C', d: 'Fourth D' },
    { id: 4, a: 'Fifth A', b: 'Fifth B', c: 'Fifth C', d: 'Fifth D' },
  ];
  return (
    <>
      <GlobalStyles />

      <h1>Table</h1>
      <Table
        ariaLabel="My table"
        caption="This is my table for testing"
        id="abcd"
      >
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableColumn key={column.field}>{column.label}</TableColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.field}>{row[column.field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
