import React, { Component } from 'react'
import Employee from './Employee'
class Employees extends Component {

    render() {
        const EmployeesList = [
            {
                Id: 1,
                Name: "praveen",
                Job: "Doctor"
            },
            {
                Id:2,
                Name: "jignesh",
                Job: "Doctor"
            },
            {
                Id:3,
                Name: "vignesh",
                Job: "Doctor"
            },
            {
                Id:4,
                Name: "vishwas",
                Job: "Janitor"
            }
        ]
        const iterateEmployee = EmployeesList.map((emp, index) =>
            <Employee key={index} emp={emp} />)

        return <div>
            <table class="table table-bg">
                <thead>
                    <tr class="bg-primary">
                        <th scope="col" class="text-left">Id</th>
                        <th scope="col" class="text-left">Name</th>
                        <th scope="col"class="text-left">Job</th>
                    </tr>
                </thead>
            </table>
                {iterateEmployee} 
        </div>
            }
        }
        
export default Employees