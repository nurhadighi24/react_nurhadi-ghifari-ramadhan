import React from "react";
import { useState, useEffect } from "react";
import OpenAI from "openai";
import Header from "../Header/Header";
import { Input } from "../Form/Input/Input";
import Button from "../Button/Button";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function PromptAi() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "you will be provided with a description of someone's music genre, and your task is to to generate what color based on that provided.",
          },
        ],
        model: "gpt-3.5-turbo",
      });
      setResults(response.choices);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const userMsg = {
      message: {
        content: prompt,
        role: "user",
      },
    };
    const newData = [...results, userMsg];
    setResults(newData);
    setPrompt("");
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });
      const choice = response.choices[0];
      setResults([...newData, choice]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="flex justify-center  items-center gap-3 bg-slate-700"
      >
        <Input
          placeholder="Insert Prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button
          label={isLoading ? "Loading..." : "Submit"}
          type="submit"
          disabled={isLoading}
        />
      </form>
      <div className="grow flex flex-col overflow-auto bg-slate-700">
        {results.map((result) => (
          <p
            key={result.message.content}
            className={`border rounded-xl p-3 mb-4 w-fit bg-slate-800 text-white ${
              result.message.role === "assistant" ? "self-start" : "self-end"
            }`}
          >
            {result.message.content}
          </p>
        ))}
      </div>
    </>
  );
}
