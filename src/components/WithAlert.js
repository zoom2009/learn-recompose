import React from 'react'

export default WrapperComponent => props => <div>
    <WrapperComponent 
        {...props} 
        alert={(msg) => alert('Alert : '+msg)} 
        />
</div>
