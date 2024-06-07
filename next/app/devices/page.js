import { CardsList } from '../components/CardsList/CardsList'
export default function page() {
    const data = [{
        name: "Солнечная панель",
        type: "Солнечная панель",
        img: "https://img.freepik.com/free-photo/solar-panel-with-thumbs-up_1156-350.jpg?t=st=1715282241~exp=1715285841~hmac=fbaaa92c333e43576a5def0a90043ac45b9e3819d230ff416acbf1f937bb6149&w=740",
        voltage: "Определяем...",
        state: "Определяем...",
        description: "Расположена на балконе в Царево",
        port: 7070,
        channels: {
            "relay-1": 7,
            "state": true
        }
    },
    {
        name: "Солнечная панель",
        type: "Солнечная панель",
        img: "https://img.freepik.com/free-photo/solar-panel-with-thumbs-up_1156-350.jpg?t=st=1715282241~exp=1715285841~hmac=fbaaa92c333e43576a5def0a90043ac45b9e3819d230ff416acbf1f937bb6149&w=740",
        voltage: "Определяем...",
        state: "Определяем...",
        description: "Расположена на балконе в Царево",
        port: 7071,
        channels: {
            "relay-1": 7
        }
    }]
    return (
        <>
            <CardsList data={data} />
        </>
    )
}
