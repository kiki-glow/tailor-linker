
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  read: boolean;
}

const Messages = () => {
  // Mock messages - replace with actual data later
  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: "Alice Johnson",
      content: "Hi, I have a question about my appointment next week.",
      timestamp: "2024-03-20T10:00:00",
      read: false,
    },
    {
      id: 2,
      sender: "Bob Wilson",
      content: "Could you update my measurements?",
      timestamp: "2024-03-20T14:30:00",
      read: false,
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [reply, setReply] = useState("");

  const handleSendReply = () => {
    if (!reply.trim()) return;
    // Add reply sending logic here
    setReply("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Messages
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Messages List */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Inbox</CardTitle>
              <CardDescription>Recent messages from clients</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 rounded-lg cursor-pointer transition-colors ${
                        selectedMessage?.id === message.id
                          ? "bg-primary/10"
                          : "hover:bg-muted"
                      } ${!message.read ? "bg-primary/5" : ""}`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary font-medium">
                            {message.sender[0]}
                          </div>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{message.sender}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {message.content}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {new Date(message.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Message Content */}
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              {selectedMessage ? (
                <div className="h-[600px] flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-10 w-10">
                        <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary font-medium">
                          {selectedMessage.sender[0]}
                        </div>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{selectedMessage.sender}</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(selectedMessage.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg">{selectedMessage.content}</p>
                  </div>
                  <div className="mt-auto">
                    <Textarea
                      placeholder="Type your reply..."
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      className="mb-4"
                    />
                    <Button onClick={handleSendReply}>Send Reply</Button>
                  </div>
                </div>
              ) : (
                <div className="h-[600px] flex items-center justify-center text-muted-foreground">
                  Select a message to view
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;
