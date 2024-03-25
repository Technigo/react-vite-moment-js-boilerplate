import { DateDisplay } from "./components/Moment/DateDisplay"

export const App = () => {
  // Staticc Data Inyected through {} reference
  const appContent = {
    subHeading: "Moment.js Components",
  }
  return (
    <div className="wrapper">
      <p>
        <strong>{appContent.subHeading}</strong>
      </p>
      <DateDisplay />
    </div>
  )
}
