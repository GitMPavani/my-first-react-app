import './App.css';

const users=[
    {
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVU-GJ04rzPI0pq5wtXrOFb4Xj7b1kBnPVqMKcnuCor9QwvOH1S6LDHjrwM-KneEfyqY&usqp=CAU',
            name:'Ramani Perera',
        designation:'Java Developer',
        salary:'15000',
        code:1
    },
    {
        avatar:'https://img.freepik.com/free-vector/one-happy-girl-white-background_1308-70173.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702425600&semt=ais',
            name:'Kamani Gamage',
        designation:'Angular Developer',
        salary:'30000',
        code:2
    },
    {
        avatar:'https://static.vecteezy.com/system/resources/thumbnails/000/229/542/small/young-caucasian-woman-as-female-developer-profession.jpg',
            name:'Nayana Fernando',
        designation:'Php Developer',
        salary:'60000',
        code:3
    },
    {
        avatar:'https://img.freepik.com/free-vector/colorful-illustration-female-programmer-working_23-2148277397.jpg',
            name:'Aruni Sandeepa',
        designation:'React Developer',
        salary:'50000',
        code:4
    }
];

function UserManager() {
    return(
        <div className="wrapper">
            <SearchForm/>
            <hr/>

            {users.map((user)=> {
                return <User {...user} key={user.code}/>;
            })}
        </div>
    );
}

const SearchForm=()=>{
    return (
        <div className='search-outer'>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log('manageSubmitEvent');
            }}>
                <input type="search" onChange={(e)=>{
                    console.log(e.target.value);
                }}/>&nbsp; |&nbsp;
                <button type='submit' onClick={(e)=>{
                    console.log('manageSubmitEvent');
                }}>Search Now</button>
            </form>
        </div>
    );
}

const User = (props) =>{
    const {avatar, name, designation, salary} = props;
    return(
      <div className='user-outer'>
          <Avatar avatar={avatar}/>
          <UserData name={name} designation={designation}
                    salary={salary}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequatur doloribus ducimus
              inventore, placeat possimus quibusdam repellendus vel voluptate voluptatum.
          </UserData>
      </div>
    );
}

const Avatar =({avatar}) =>{
    return(
        <div className='avatar-outer'>
            <img src={avatar}
                 alt="Free Girl "/>
        </div>
    )
}

const UserData =({name,designation,salary,children}) =>{
    return(
        <div className='user-data'>
            <UserName name={name}/>
            <Designation designation={designation}/>
            <Salary salary={salary}/>
            <p>
                {children}
            </p>

            <button style={{cursor:'pointer'}} onClick={(e)=> {
                console.log(name);
            }}>Print Data</button>

        </div>
    )
}

const UserName =({name}) =>{
    const inlineStyle={
        color:'#2980b9',
        margin: 0
    }
    return(
        <h1 style={inlineStyle}>{name}</h1>
    )
}

const Designation =({designation}) =>{
    return(
        <h3 style={{fontStyle:'italic',margin: 0}}>{designation}</h3>
    )
}

const Salary =({salary}) =>{
    return(
        <h3 style={{fontStyle:'italic',margin: 0}} >{salary}</h3>
    )
}

export default UserManager;