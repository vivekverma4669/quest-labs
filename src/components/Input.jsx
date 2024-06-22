const Input = (text) => {
	console.log(text);
	return (
		<div className="form__group field">
			<input
				type="input"
				className="form__field"
				placeholder={text.text}
				required="true"
			/>
			<label className="form__label">{text.text}</label>
		</div>
	);
};
export default Input;
