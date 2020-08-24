import React from 'react';
import data from "./data.json";



let Resume=(props)=>{
    let information=data.profiles[props.location.sameCardData.id];
    console.log(information)
    return(
       
        
        <div class="card-view">
            
            <div class="card1">
                
            <img src={information.details.image}></img>
                <h2>{information.details.name}</h2>
                <p><strong>Email :</strong> <a href={`mailto:${information.details.email}`}>{information.details.email}</a></p>
                <p><strong>Phone No : </strong> <a href={`callto:${information.details.email}`}>{information.details.phone}</a></p>
                <p><strong>Address : </strong>{information.details.email} </p> 
                                
            </div>
        
            <div class="card2">
                <dl>
                    <dt class="dt">CAREER OBJECTIVE</dt>
                    <dd> { information.details2.career } </dd>
                    <br/>
                    <hr/> 

                    <dt class="dt">EDUCATION QUALIFICATION</dt><br/>
                    
                    <div class="st">
                        <table border="4">
                        <tr>
                            <th>Course</th>
                            <th> Institution </th>
                            <th>University/Board </th>
                            <th>Percentage </th>
                            <th>Year of completion</th>
                        
                        </tr>
                      
                       
                        {information.details2.education.map((ele,index)=>(
                             <tr>
                             <td>{ele.course} </td>
                             <td>{ele.institution}</td>
                             <td>{ele.university} </td>
                             <td>{ele.per}</td>
                             <td>{ele.year} </td>
                             </tr>
                        ))} 

                    
                    </table>  
                    </div>
                    <br/>
                    <hr/>              
                    <dt class="dt"> TECHNICAL SKILLS </dt>

                    <dd><strong>Programming Languages : </strong>{information.details2.technical.p} 
                    <br/><strong>Web Technologies :</strong> {information.details2.technical.w} 
                    <br/><strong>Databases :</strong> {information.details2.technical.d} </dd>
                    <hr/> 
                
                    <dt class="dt"> ACHIEVEMENTS </dt>
                    <dd><strong></strong> {information.details2.achievements.one} 
                    
                    <br/> <strong></strong>{information.details2.achievements.two} 
                    <br/><strong></strong>{information.details2.achievements.three} </dd>
                    <hr/> 

                    <dt class="dt">HOBBIES</dt>
                    <dd><strong></strong>{information.details2.hobbies.one} <br/> 
                        <strong></strong>{information.details2.hobbies.one}</dd>
                </dl>
                
                
                
            </div>
    </div>
    )
}
export default Resume;