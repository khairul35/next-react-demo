"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './chat.module.css';
import oyen from '../assets/oyen.jpeg';

const ChatCat = () => {
    const [messages, setMessages] = useState<{ type: string; message: string }[]>([]);
    const [message, setMessage] = useState('');


    const generateBotMessage = () => {
        // Split the user's message into words and calculate the number of words
        const words = message.trim().split(/\s+/);
        setMessage('');
        // Set fake time out waiting text generation
        /** i want the time out here to steal time */
        const numWords = words.length;

        // Generate the bot's reply based on the number of words
        let botReply = 'Meow';
        if (numWords > 0) {
            botReply = 'Meow '.repeat(numWords); // Repeat "Meow" based on the number of words
        }
        return botReply;
    }

    const handleSendMessage = () => {
        const params = {
            type: 'user',
            message: message,
        };
        messages.push(params);
        const botParams = {
            type: 'bot',
            message: generateBotMessage(),
        };
        messages.push(botParams);
    };

    return (
        <div className={styles.mainContainer}>
        <div className="flex justify-center items-center">
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <Image src={oyen} alt="Oyen" />
                </div>
            </div>
        </div>
        {messages.length > 0 ? 
            messages.map((message: { type: string, message: string }) => {
                return (
                    <div key={message.message}>
                        {message.type === 'user' ? (
                            <div className="chat chat-end">
                                <div className="chat-bubble chat-bubble-primary">{message.message}</div>
                            </div>
                        ) : (
                            <div className="chat chat-start">
                                <div className="chat-bubble chat-bubble-secondary">{message.message}</div>
                            </div>
                        )}
                    </div>
                );
            })
            :
            <div className='flex justify-center'>Let&apos;s chat with oyen</div>
        }
        <div className="flex justify-center p-10"> {/* Use flex to center the input */}
            <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        handleSendMessage();
                    }
                }}
                placeholder="Type a message..."
                className="w-full mr-1 rounded-lg p-2" /* Make the input full width */
            />
            <button onClick={handleSendMessage} className="p-2 bg-violet-700">Enter</button>
        </div>
</div>

    );
};

export default ChatCat;
