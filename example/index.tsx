import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from "../src/button/button"
import {Select} from "../src/select/select"
import {Table} from "../src/table/table"
const App = () => {
  return (
    <div>
      <Select options={[{value:"1",title:"1"}]}/>
      <Table columns={[]} data={[]} keyExtractor={()=>""} pagination={{
        pageCount:10,
        pageIndexClicked:()=>{},
        perPage:3,
        currentPage:1,
        totalRows:10
      }}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
