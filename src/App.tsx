import React, { useState } from "../modules/ease";
import { Title } from "./components/Title";
import { formatDate, formatDateTime } from "./utils";

interface AppProps {
  refId: string;
}

export const App = React.component(({ refId }: AppProps) => {
  const [ count, setCount ] = useState<number>(0);
  const [ text, setText ] = useState<string>("Texto inicial");
  const [ number, setNumber ] = useState<number>(0);
  const [ checkbox, setCheckbox ] = useState<boolean>(false);
  const [ color, setColor ] = useState<string>("");
  const [ date, setDate ] = useState<string>(formatDate(new Date(), "DD/MM/YYYY"));
  const [ dateTime, setDateTime ] = useState<string>(formatDateTime(new Date()));
  const [ email, setEmail ] = useState<string>("email@email.com");
  const [ file, setFile ] = useState<string>("");
  const [ month, setMonth ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");
  const [ radio, setRadio ] = useState<boolean>(true);
  const [ radio2, setRadio2 ] = useState<boolean>(false);
  const [ range, setRange ] = useState<number>(50);
  const [ search, setSearch ] = useState<string>("");
  const [ time, setTime ] = useState<string>("");
  const [ week, setWeek ] = useState<string>("");
  /*
    Todo useState é composto por um retorno [ nomeDoState, setState ]
    OBS: nomeSate.value é usado pegar o valor do estado usado para
      //atributos html, value, onChange, onClick...
  */

  return (
    <div e-ref={refId}>
      <Title title="Contador" />

      <p>Contador: {count}</p>
      <button onClick={(e) => setCount(++count.value)}>
        + 1
      </button>

      <p className="text">Input text: {text}</p>
      <input
        type="text"
        value={text.value}
        onChange={(e: any) => setText(e.target.value)}
      />

      <p className="number">Input number: {number}</p>
      <input
        type="number"
        value={number.value}
        onChange={(event) => {
          setNumber(event.target.value)
        }}
      />

      <p className="checkbox">Input checkbox: {checkbox}</p>
      <input
        type="checkbox"
        checked={checkbox.value}
        onChange={(event) => {
          setCheckbox(event.target.checked)
        }}
      />

      <p className="color">Input color: {color}</p>
      <input
        type="color"
        value={color.value}
        onChange={(event) => {
          setColor(event.target.value)
        }}
      />

      <p className="date">Input date: {date}</p>
      <input
        type="date"
        value={date.value}
        onChange={(event) => {
          setDate(event.target.value)
        }}
      />

      <p className="datetime-local">Input datetime-local: {dateTime}</p>
      <input
        type="datetime-local"
        value={dateTime.value}
        onChange={(event) => {
          setDateTime(event.target.value)
        }}
      />

      <p className="email">Input email: {email}</p>
      <input
        type="email"
        value={email.value}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
      />

      <p className="file">Input file: {file}</p>
      <input
        type="file"
        value={file.value}
        onChange={(event) => {
          setFile(event.target.value)
        }}
      />

      <p className="month">Input month: {month}</p>
      <input
        type="month"
        value={month.value}
        onChange={(event) => {
          setMonth(event.target.value)
        }}
      />

      <p className="month">Input month: {month}</p>
      <input
        type="month"
        value={month.value}
        onChange={(event) => {
          setMonth(event.target.value)
        }}
      />

      <p className="password">Input password: {password}</p>
      <input
        type="password"
        value={password.value}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
      />

      <p className="radio">Input radio: {radio}</p>
      <input
        type="radio"
        name="radio"
        checked
        onClick={(e) => {
          setRadio(true)
          setRadio2(false)
        }}
      />

      <p className="radio2">Input radio2: {radio2}</p>
      <input
        type="radio"
        name="radio"
        onClick={(e) => {
          setRadio2(true)
          setRadio(false)
        }}
      />

      <p className="range">Input range: {range}</p>
      <input
        type="range"
        value={range.value}
        onChange={(event) => {
          setRange(event.target.value)
        }}
      />

      <p className="search">Input search: {search}</p>
      <input
        type="search"
        value={search.value}
        onChange={(event) => {
          setSearch(event.target.value)
        }}
      />
      
      <p className="time">Input time: {time}</p>
      <input
        type="time"
        value={time.value}
        onChange={(event) => {
          setTime(event.target.value)
        }}
      />

      <p className="week">Input week: {week}</p>
      <input
        type="week"
        value={week.value}
        onChange={(event) => {
          setWeek(event.target.value)
        }}
      />

    </div>
  );
});