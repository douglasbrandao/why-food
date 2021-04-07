import React from 'react';

import { ListInput } from './styles';

function Input ({ option, value, handleSingle, handleMultiple, handleList }) {
    
    let input = null;

    switch(option.type) {
        case 'single':
            input = <input 
                    name={option.title} 
                    type='radio' 
                    id={`${value.name}-${value.id}`} 
                    value={value.name}
                    onClick={() => handleSingle(option.id, value.id, value.price)}
                    required={option.required}
                    />
            break;
        case 'list':
            input = <ListInput 
                        onChange={(e) => handleList(option.id, value.id, value.price, e.target.value)} 
                        type='number' 
                        min={0} 
                        defaultValue={0} 
                    />
            break;
        case 'multiple':
            input = <input 
                    type='checkbox' 
                    id={`${value.name}-${value.id}`} 
                    value={value.name}
                    onClick={() => handleMultiple(option.id, value.id, value.price, option.min, option.max)}
                    required={option.required}
                    />
            break;
        default:
            return input;
    }

    return input;

}

export default Input;