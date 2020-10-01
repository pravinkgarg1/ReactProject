import React from 'react'
function Employee({emp})
{
    return(
        
                <table class="table">
                <tr class="bg-warning text-left" >
                    <td class="text-left">
                       {emp.Id}
                    </td>
                    <td class="text-left">
                        {emp.Name}
                    </td>
                    <td></td>
                    <td class="text-left">
                        {emp.Job}
                    </td>
                </tr>
                
            </table>
        
    )
}

export default Employee