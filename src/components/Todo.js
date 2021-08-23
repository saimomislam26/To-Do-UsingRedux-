import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addtodo, deletetodo, cleartodo } from "../action";


const Todo = () => {
    const [inputData, inputState] = useState("");
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducer.list)

    return (
        <>
            <div className="Main-div">
                <div className="child-div">
                    <figure>
                        <figcaption className="caption text-white">
                            Add Your Task Here &#x23EC;
                        </figcaption>
                    </figure>
                </div>
                <div className="add-items">
                    <input type="text" placeholder="&#x270D; add task..." size="40"
                        value={inputData}
                        onChange={(event) => inputState(event.target.value)} />
                    <a href="#" onClick={() => dispatch(addtodo(inputData), inputState(''))} className="add-btn"><i className="fa fa-plus"></i></a>

                </div>
                <div className="showitem mt-3">
                    {
                        list.map((elem) => {
                            return (
                                <div key={elem.id}>
                                    < input type="text" size="40" value={elem.data} readOnly className="mt-2" />

                                    <a href="#" onClick={() => dispatch(deletetodo(elem.id))} className="add-btn"><i className="far fa-trash-alt" title="Delete item"></i></a>
                                </div>
                            )

                        })
                    }

                </div>
                <div className="removebtn mt-3">
                    <button class="button button2" onClick={() => dispatch(cleartodo())}>Remove All</button>
                </div>

            </div>


        </>
    )
}

export default Todo;