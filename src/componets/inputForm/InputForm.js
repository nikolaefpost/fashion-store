import React from 'react';

import styles from "./inputForm.module.scss"

const InputForm = ({register, errors, field}) => {
    return (
        <div className={styles.input_block}  key={field}>
            {!!errors[field] && <span className={styles.error}>{errors[field].message}</span>}
            <input
                className={errors[field] ? styles.error_border : undefined}
                type="text"
                placeholder={field}
                {...register(field)}
            />
        </div>
    );
};

export default InputForm;