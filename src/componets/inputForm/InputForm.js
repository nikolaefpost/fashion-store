import React from 'react';

import styles from "./inputForm.module.scss"

const InputForm = ({register, errors, field}) => {
    return (
        <div className={styles.input_block}  key={field}>
            {!!errors[field] && <span className={styles.error}>{errors[field].message}</span>}
            <input type="text" placeholder={field} {...register(field)} />
        </div>
    );
};

export default InputForm;