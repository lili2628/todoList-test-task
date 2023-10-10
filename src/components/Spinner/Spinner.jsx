import css from './Spinner.module.css';


export default function Spinner() {
    return (
        <div className={css.spinner_container}>
            <span className={css.let1}>l</span>
            <span className={css.let2}>o</span>
            <span className={css.let3}>a</span>
            <span className={css.let4}>d</span>
            <span className={css.let5}>i</span>
            <span className={css.let6}>n</span>
            <span className={css.let7}>g</span>
        </div>
    );
}
