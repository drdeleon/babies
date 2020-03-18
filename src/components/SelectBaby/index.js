import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { history } from '../App';

import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import { Dropdown } from 'semantic-ui-react';

import * as selectors from '../../reducers';
import * as actions from '../../actions/baby';

const SelectBaby = ({ babies, selectedBaby, onChange }) => {

    //Para probar la aplicación desde cero en desarollo.
    if(selectedBaby === undefined ) {
        history.push("/")
    } 
    
    let babyOptions = babies.map(baby => ({
        text: `${baby.name} ${baby.lastName}`,
        value: baby.id,
    })
    )

    return (
        <div className="baby-selection-container">
            <div className='baby-selected-dropdown'>
                <Dropdown
                    placeholder='SelectBaby'
                    fluid
                    selection
                    text={`${selectedBaby.name} ${selectedBaby.lastName}`}
                    value={selectedBaby.id}
                    onChange={onChange}
                    options={babyOptions}
                />
            </div>
            
            <Link to='/'>
                <button 
                className="add-baby-button"
                type="submit">
                    {'Agregar bebé'}
                </button>
            </Link>
        </div>
    );
};


export default withRouter(connect(
    (state) => ({
        babies: selectors.getBabies(state),
        selectedBaby: selectors.getBaby(state, selectors.getSelectedBaby(state)),
    }),
    dispatch => ({
        onChange(event, { value }) {
            console.log(value);
            dispatch(actions.selectBaby(value))
        },
    })
)( SelectBaby ));

