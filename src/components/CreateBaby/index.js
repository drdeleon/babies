import React, { useState, Fragment} from 'react';
import { connect } from 'react-redux';

import './styles.css';

import * as actions from '../../actions/baby';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { history } from '../App';

const CreateBaby = ({ onSubmit }) => {
    const [name, changeName] = useState('');
    const [lastName, changeLastName] = useState('');


    return (
        <div className="baby-form">
            <h1 className="baby-form-title"> CREAR BEBE </h1>

            <input
            className="baby-form-input"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={e => changeName(e.target.value)}
            />

            <input
            className="baby-form-input"
            type="text"
            placeholder="Apellido"
            value={lastName}
            onChange={e => changeLastName(e.target.value)}
            />  

            <button 
            className="create-baby-button"
            type="submit"
            onClick={
                () => onSubmit(name, lastName )
            }>
                {'CREAR'}
            </button>
        </div>
    );
}

export default withRouter(connect(
    undefined,
    dispatch => ({
        onSubmit( name, lastName ) {

            if (name !== '' && lastName !== '') {
                //tenés que importar history para hacer push!
                // import { history } from '../App';
                history.push('/baby');
                dispatch(actions.createBaby(name, lastName, new Date()));
            } else {
                alert('Por favor llenar campos de nombre y apellido')
            }
        }
    }),
)(CreateBaby) );