import React from 'react';

const EditExpensePage = (props) => {

    return (
        <div>
            Editing Expense with ID of: {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;