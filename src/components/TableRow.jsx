import React from 'react'
import PropTypes from 'prop-types'

const TableRow = props => {
    return (
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.user}</td>
            <td>{props.description}</td>
            <td>
                <i onClick={props.edit} className={`fas fa-edit ${props.mode ? "text-secondary" : "text-success"}`} />
                <i onClick={props.delete} className="fas fa-trash ml-3 mr-3" />
            </td>
        </tr>
    )
}
//Para declarar valores por defecto para props no declarados
TableRow.defaultProps = {
}
//Para declarar el tipo de dato los props, también se puede establecer si el props será obligatorio
TableRow.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    edit: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    mode: PropTypes.bool.isRequired
}

export default TableRow
