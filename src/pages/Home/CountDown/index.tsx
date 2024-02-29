import { CountDownContainer, Separator } from "./styles";
import { useContext, useEffect } from "react";
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from "../../../contexts/CyclesContext";

function CountDown() {
    const { activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPasses: setAmountSecondsPassed }
        = useContext(CyclesContext)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmountToShow = Math.floor(currentSeconds / 60)
    const secondsAmountToShow = currentSeconds % 60

    const minutes = String(minutesAmountToShow).padStart(2, '0')
    const seconds = String(secondsAmountToShow).padStart(2, '0')

    useEffect(() => {
        if (activeCycle) document.title = `${minutes}:${seconds}`
    }, [minutes, seconds, activeCycle])

    useEffect(() => {
        let interval: any;

        if (activeCycle) {
            interval = setInterval(() => {
                const differenceInSecondsValue = differenceInSeconds(new Date(), activeCycle.startDate)

                if (differenceInSecondsValue > totalSeconds) {
                    markCurrentCycleAsFinished()
                    setAmountSecondsPassed(totalSeconds)
                    clearInterval(interval)
                } else {
                    setAmountSecondsPassed(differenceInSecondsValue)
                }

            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }

    }, [
        activeCycle,
        totalSeconds,
        activeCycleId,
        markCurrentCycleAsFinished,
        setAmountSecondsPassed
    ])

    return (
        <>
            <CountDownContainer>
                <span>{minutes[0]}</span>
                <span>{minutes[1]}</span>
                <Separator>:</Separator>
                <span>{seconds[0]}</span>
                <span>{seconds[1]}</span>
            </CountDownContainer>
        </>
    )
}

export { CountDown }
