import { useContext } from "react"
import { HistoryContainer, HistoryList, Status } from "./styles"
import { CyclesContext } from "../../contexts/CyclesContext"
import { formatDistanceToNow } from "date-fns"

function History() {
    const { cycles } = useContext(CyclesContext)

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
                        {
                            cycles.map(cycle =>
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount} minutes</td>
                                    <td>
                                        {formatDistanceToNow(cycle.startDate)}
                                    </td>
                                    <td>
                                        {cycle.finishedDate && <Status statuscolor="green">Completed</Status>}
                                        {cycle.interruptedDate && <Status statuscolor="red">Interrupted</Status>}
                                        {!cycle.finishedDate && !cycle.interruptedDate && <Status statuscolor="yellow">In progress</Status>}
                                    </td>
                                </tr>
                            ).reverse() // Most recent is topest one
                        }
                        {/* Some static things just to showcase */}
                        <tr>
                            <td>Design logo</td>
                            <td>30 minutes</td>
                            <td>
                                3 days ago
                            </td>
                            <td>
                                <Status statuscolor="green">Completed</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Cook dinner</td>
                            <td>12 minutes</td>
                            <td>
                                2 hours ago
                            </td>
                            <td>
                                <Status statuscolor="red">Interrupted</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}

export { History } 
