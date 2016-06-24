import React from 'react';
import ReactDOM from 'react-dom';

class AppDynamicallyGeneratedComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {id: 1, name: "a"},
                {id: 2, name: "b"},
                {id: 3, name: "c"},
                {id: 4, name: "d"},
                {id: 5, name: "e"},
                {id: 6, name: "f"},
                {id: 7, name: "g"},
                {id: 8, name: "h"},
                {id: 9, name: "i"},
                {id: 10, name: "j"},
                {id: 11, name: "k"},
                {id: 12, name: "l"},
                {id: 13, name: "m"},
                {id: 14, name: "n"},
                {id: 15, name: "o"},
                {id: 16, name: "p"},
                {id: 17, name: "q"},
                {id: 18, name: "r"},
            ]
        };
    }

    render() {
        let rows = this.state.data.map(person => {
           return <PersonRow key={person.id} data={person}/>
        });
        return (
            <table>
                <tbody>{rows}</tbody>
            </table>
        );
    }
};

const PersonRow = (props) => {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
        </tr>
    );
};

export default AppDynamicallyGeneratedComponents
