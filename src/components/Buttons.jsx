const Buttons = (text) => {
	return (
		<button style={{backgroundColor :'grey' , padding :'5px' , borderRadius :'10px' , margin :'40px ' , fontSize:'20px '}}
			onClick={text.click}
			type={text.type}
		>
			<span>{text.text}</span>
		</button>
	);
};

export default Buttons;
