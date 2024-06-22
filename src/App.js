import { useState } from "react";
import { NavLink, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./styles/input.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};

 const fields = [
		{
			placeholder: "Name",
		},
		{
			placeholder: "First Name",
		},
		{
			placeholder: "Last Name",
		},
		{
			placeholder: "Email Address",
		},
		{
			placeholder: "Company",
		},
		{
			placeholder: "Phone Number",
		},
		{
			placeholder: "Job Title",
		},
	];
  const [menuOpen, setMenuOpen] = useState(false);
  
	return (
		<BrowserRouter>
		<div className="App" >

			
      <nav>
      <Link to="/" className="title">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Braze_Logo.svg/1200px-Braze_Logo.svg.png" alt='logo ' style={{height: "40px" , marginLeft  :"10px"}}/>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen) }>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/">How it works   </NavLink>
        </li>
        <li>
          <NavLink to="/Product">Product </NavLink>
        </li>

        <li>
          <NavLink to="/Solutions"> Solutions</NavLink>
        </li>

        <li>
          <NavLink to="/Customers">Customers</NavLink>
        </li>
        
        <li>
          <NavLink to="/Patners">patners</NavLink>
        </li>
		
        <li>
          <NavLink to="/create">Company</NavLink>
        </li>

        </ul>

       <div   id="log" style={{marginRight: "30px",  display : menuOpen? "block" : ""}} >
       <h3>  <NavLink to="/login" style={{borderRadius :"5px", padding:'10px'}}> Login</NavLink>   </h3> 
       </div>
      
    </nav>         


			<Buttons class="open-drawer-button" click={toggleDrawer} text="Open" />

			<div className={`drawer ${isOpen ? "open" : ""}`}>

				<div  style={{position : 'absolute' , top: "5px" , right :'10px'}} >
					
				    	<Buttons
						onClick={toggleDrawer}
						class="close-drawer-button"
						text="X"
					/>
					
				</div>

				<div className="drawer-content" style={{zIndex :'3'}}>
					<form className="form" action="">
						{fields.map((ele, ind) => (
							<Input key={ind} text={ele.placeholder} />
						))}
						<Buttons text="Submit" type="submit" />
					</form>
				</div>

			</div>


			<div style={{display :'flex'}}> <div style={{width :'600px' }}> <h1 style={{color :"white"}}>There 's Never been a Better time  to be a better Marketer </h1>
			<p style={{color :"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>   <img style={{borderRadius :"10px" , marginLeft :'100px'}} src="https://www.agitraining.com/sites/default/files/styles/max_650x650/public/what-is-photoshop.jpg?itok=ajy8-vHn"/> </div>
		</div>
		</BrowserRouter>
	);
};

export default App;
