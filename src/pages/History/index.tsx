import { useContext } from "react"
import { HistoryContainer, HistoryList, Status } from "./styles"
import { CyclesContext } from "../../contexts/CyclesContext"

function History() {
    const { cycles } = useContext(CyclesContext)
    console.log(cycles)

    return (
        <HistoryContainer>
            <h1>My history</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Duration</th>
                            <th>Start</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Task</td>
                            <td>20 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statuscolor="red">Completed</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td>20 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statuscolor="yellow">Completed</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td>20 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statuscolor="green">Completed</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td>20 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statuscolor="green">Completed</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Task</td>
                            <td>20 minutes</td>
                            <td>2 months ago</td>
                            <td>
                                <Status statuscolor="green">Completed</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>

        </HistoryContainer>
    )
}

export { History } 
