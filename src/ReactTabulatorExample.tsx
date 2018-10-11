import * as React from 'react';
import ReactTabulator from './ReactTabulator';

const columns = [
  { title: 'Name', field: 'name', width: 150 },
  { title: 'Age', field: 'age', align: 'left', formatter: 'progress' },
  { title: 'Favourite Color', field: 'col' },
  { title: 'Date Of Birth', field: 'dob', align: 'center' }
];
const data = [
  { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '' },
  { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1989' },
  { id: 3, name: 'Christine Lobowski', age: '42', col: 'green', dob: '22/05/1985' },
  { id: 4, name: 'Brendon Philips', age: '125', col: 'orange', dob: '01/08/1980' },
  { id: 5, name: 'Margret Marmajuke', age: '16', col: 'yellow', dob: '31/01/1999' },
  { id: 6, name: 'Van Ng', age: '37', col: 'green', dob: '06/15/1982' },
  { id: 7, name: 'Duc Ng', age: '37', col: 'yellow', dob: '10/15/1982' }
];

interface IProps {
  data: any[];
}

export default class extends React.Component<IProps> {
  ref: any = null;

  rowClick = (e: any, row: any) => {
    console.log('ref table: ', this.ref.table); // this is the Tabulator table instance
    console.log('rowClick id: ${row.getData().id}', row, e);
  };

  render() {
    return (
      <div>
        <ReactTabulator
          ref={ref => (this.ref = ref)}
          height={150}
          columns={columns}
          data={data}
          tableBuilt={() => console.log('tableBuilt')}
          rowClick={this.rowClick}
          rowDblClick={() => console.log('rowDblClick')}
          dataSorted={() => console.log('dataSorted')}
          options={{ resizableRows: true }}
          data-custom-attr="test-custom-attribute"
          className="custom-css-class"
        />
      </div>
    );
  }
}