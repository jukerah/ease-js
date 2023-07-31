import React, { useState, useEffect } from "../modules/react";

import { Title } from "./components/Title";
import { Title2 } from "./components/Title2";

import { formatDate, formatDateTime } from "./utils";

export const App = React.createComponent(() => {
  const [ count, setCount ] = useState<number>(0);
  const [ text, setText ] = useState<string>("Texto inicial");
  const [ number, setNumber ] = useState<number>(0);
  const [ checkbox, setCheckbox ] = useState<boolean>(false);
  const [ color, setColor ] = useState<string>("#fb13ff");
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
      //atributos html, value, e-change, e-click...
  */

  useEffect(() => {
    console.log("função do useEffect com dependência")
  }, [checkbox]);

  useEffect(() => {
    console.log("função do useEffect com 2 dependência")
  }, [checkbox, count]);

  useEffect(() => {
    console.log("função do useEffect sem dependência")
  }, []);


  return (
    <div id="app">
      <Title e-if={!checkbox.value} status={checkbox} title="Contador" />
      <Title2 e-if={checkbox.value} status={checkbox} title="Contador2" />

      <p className="checkbox">Input checkbox: {checkbox}</p>
      <input
        type="checkbox"
        checked={checkbox.value}
        data-model={checkbox.id}
        e-change={(event) => {
          setCheckbox(event.target.checked)
        }}
      />

      <p>Count: {count}</p>
      <button e-click={() => setCount(count.value + 1)}>
        + 1
      </button>

      <p className="text">Input text: {text}</p>
      <input
        type="text"
        value={text.value}
        e-change={(e: any) => setText(e.target.value)}
      />

      <p className="number">Input number: {number}</p>
      <input
        type="number"
        value={number.value}
        e-change={(event) => {
          setNumber(event.target.value)
        }}
      />

      <p className="color">Input color: {color}</p>
      <input
        type="color"
        value={color.value}
        e-change={(event) => {
          setColor(event.target.value)
        }}
      />

      <p className="date">Input date: {date}</p>
      <input
        type="date"
        value={date.value}
        e-change={(event) => {
          setDate(event.target.value)
        }}
      />

      <p className="datetime-local">Input datetime-local: {dateTime}</p>
      <input
        type="datetime-local"
        value={dateTime.value}
        e-change={(event) => {
          setDateTime(event.target.value)
        }}
      />

      <p className="email">Input email: {email}</p>
      <input
        type="email"
        value={email.value}
        e-change={(event) => {
          setEmail(event.target.value)
        }}
      />

      <p className="file">Input file: {file}</p>
      <input
        type="file"
        value={file.value}
        e-change={(event) => {
          setFile(event.target.value)
        }}
      />

      <p className="month">Input month: {month}</p>
      <input
        type="month"
        value={month.value}
        e-change={(event) => {
          setMonth(event.target.value)
        }}
      />

      <p className="month">Input month: {month}</p>
      <input
        type="month"
        value={month.value}
        e-change={(event) => {
          setMonth(event.target.value)
        }}
      />

      <p className="password">Input password: {password}</p>
      <input
        type="password"
        value={password.value}
        e-change={(event) => {
          setPassword(event.target.value)
        }}
      />

      <p className="radio">Input radio: {radio}</p>
      <input
        type="radio"
        name="radio"
        checked
        e-click={(e) => {
          setRadio(true)
          setRadio2(false)
        }}
      />

      <p className="radio2">Input radio2: {radio2}</p>
      <input
        type="radio"
        name="radio"
        e-click={(e) => {
          setRadio2(true)
          setRadio(false)
        }}
      />

      <p className="range">Input range: {range}</p>
      <input
        type="range"
        value={range.value}
        e-change={(event) => {
          setRange(event.target.value)
        }}
      />

      <p className="search">Input search: {search}</p>
      <input
        type="search"
        value={search.value}
        e-change={(event) => {
          setSearch(event.target.value)
        }}
      />
      
      <p className="time">Input time: {time}</p>
      <input
        type="time"
        value={time.value}
        e-change={(event) => {
          setTime(event.target.value)
        }}
      />

      <p className="week">Input week: {week}</p>
      <input
        type="week"
        value={week.value}
        e-change={(event) => {
          setWeek(event.target.value)
        }}
      />

    </div>
  );
});