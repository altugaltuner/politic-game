"use client";

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { supabase } from '../../supabaseClient';

const db = supabase.from('users');

const socket = io("http://localhost:3001");

const LiveChat = () => {
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState<{ text: string, sender: string }[]>([]);
    const [username, setUsername] = useState<string>("");

    const fetchMessages = async () => {
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .order('created_at', { ascending: true });

        if (error) {
            console.error("Mesajlar alınamadı:", error);
        }
        else if (data) {
            setMessageReceived(data);
        }
    }

    useEffect(() => {
        fetchMessages();

        socket.on("receive_message", (data) => {
            setMessageReceived(prevMessages => [...prevMessages, data]);
        });
        return () => {
            socket.off("receive_message");
        }
    });

    const sendMessage = async () => {
        if (message.trim() !== "") {
            const msgData = { text: message, sender: username || "Siz" };

            const { error } = await supabase
                .from('messages')
                .insert([msgData]);

            if (error) {
                console.error("Mesaj kaydedilemedi:", error);
            }
            else {
                socket.emit("send_message", msgData);
                setMessage("");
            }
        }
    }

    return (
        <div className="flex flex-col h-screen max-w-lg mx-auto border border-gray-300 rounded-lg p-4">
            {/* Mesaj Listesi */}
            <div className="flex-grow overflow-y-auto mb-4">
                {messageReceived.map((msg, index) => (
                    <div
                        key={`${msg.sender}-${msg.text}-${index}`}
                        className={`flex ${msg.sender === (username || "Siz") ? "justify-end" : "justify-start"} mb-2`}
                    >
                        <div
                            className={`px-4 py-2 rounded-lg ${msg.sender === (username || "Siz")
                                ? "bg-green-200 text-right"
                                : "bg-gray-200 text-left"
                                } max-w-xs`}
                        ><span className="text-xs text-gray-500">
                                {msg.sender}
                            </span>
                            <p className="text-sm">{msg.text}</p>

                        </div>
                    </div>
                ))}
            </div>

            {/* Kullanıcı Adı ve Mesaj Girişi */}
            <div className="flex flex-col gap-2">
                <input
                    type="text"
                    placeholder="Kullanıcı adınız"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 text-sm"
                />
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Mesajınızı yazın"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-grow border border-gray-300 rounded-md p-2 text-sm"
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                        Gönder
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LiveChat;
