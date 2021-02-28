import React from "react";
import FormComponent from './FormComponent';
import ListComponent from './ListComponent';

const ContainerComponent = () => (
    <>
        <div>
            <h2>Add a new article</h2>
            <FormComponent />
        </div>
        <div>
            <h2>Articles</h2>
            <ListComponent />
        </div>        
    </>
);

export default ContainerComponent;
