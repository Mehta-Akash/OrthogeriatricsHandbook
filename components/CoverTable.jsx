import React from 'react';
import { DataTable } from 'react-native-paper';

const CoverTable = () => (
  <DataTable>
    <DataTable.Header>
      <DataTable.Title></DataTable.Title>
      <DataTable.Title>Monday</DataTable.Title>
      <DataTable.Title>Tuesday</DataTable.Title>
      <DataTable.Title>Wednesday</DataTable.Title>
      <DataTable.Title>Thursday</DataTable.Title>
      <DataTable.Title>Friday</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>OG</DataTable.Cell>
      <DataTable.Cell>Juniors</DataTable.Cell>
      <DataTable.Cell>Cons.</DataTable.Cell>
      <DataTable.Cell>Juniors</DataTable.Cell>
      <DataTable.Cell>Juniors</DataTable.Cell>
      <DataTable.Cell>Cons.</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Medical</DataTable.Cell>
      <DataTable.Cell>Cons.</DataTable.Cell>
      <DataTable.Cell>Juniors</DataTable.Cell>
      <DataTable.Cell>Juniors</DataTable.Cell>
      <DataTable.Cell>Cons</DataTable.Cell>
      <DataTable.Cell>Juniors</DataTable.Cell>
    </DataTable.Row>
  </DataTable>
);

export default CoverTable;
