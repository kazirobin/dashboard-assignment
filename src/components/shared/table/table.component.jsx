import TableHead from './table.head.component'
import TableBody from './table.body.component'

const Table = ({rows,columns,children}) => {
  return (
    <table>
      <TableHead columns={columns}/>
      <TableBody rows={rows} columns={columns} >
        {children}
      </TableBody>
    </table>
  )
}

export default Table