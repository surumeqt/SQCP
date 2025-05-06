<<<<<<< HEAD
  import { View, Text } from "react-native";
  import { useEffect, useState } from "react";
  import { useMutation } from "convex/react";
  import { api } from "../../convex/_generated/api";
=======
import { View, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
>>>>>>> b3256deed423b80c1701f8f6a07da6ef7a09fde9

  export default function WaitingScreen() {
    const getOrCreateQueue = useMutation(api.queue.getOrCreateQueueEntryForUser);
    const [queueEntry, setQueueEntry] = useState<{
      number: number;
      expiresAt: number;
      isActive: boolean;
    } | null>(null);
    const [timeLeft, setTimeLeft] = useState<string | null>(null);

    useEffect(() => {
      getOrCreateQueue().then((entry) => {
        setQueueEntry({
          number: entry.number,
          expiresAt: entry.expiresAt ?? Date.now() + 300000,
          isActive: entry.isActive ?? true,
        });
      });
    }, []);

    useEffect(() => {
      if (!queueEntry?.expiresAt) return;

      const interval = setInterval(() => {
        const now = Date.now();
        const diff = Math.max(0, Math.floor((queueEntry.expiresAt - now) / 1000));

        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;

        const formatted = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        setTimeLeft(formatted);

<<<<<<< HEAD
        if (diff === 0) clearInterval(interval);
      }, 1000);

      return () => clearInterval(interval);
    }, [queueEntry]);

    return (
      <View className="flex-1 justify-center items-center bg-[#312C51] px-6">
        <Text className="text-[#F1AA9B] text-2xl font-bold text-center mb-4">
          Please wait...
        </Text>

        {queueEntry ? (
          <>
            <Text className="text-white text-lg text-center mb-2">
              Your Queue Number: {queueEntry.number}
            </Text>
            <Text className="text-[#F0C38E] text-lg text-center">
              Time Left: {timeLeft ?? "Loading..."}
            </Text>
          </>
        ) : (
          <Text className="text-red-400 text-lg">No queue assigned.</Text>
        )}
      </View>
    );
  }
=======
      {queueEntry ? (
        <>
          <Text className="text-white text-lg text-center mb-2">
            Your Queue Number: {queueEntry.number}
          </Text>
          <Text className="text-[#F0C38E] text-lg text-center">
            Time Left: {timeLeft !== null ? `${timeLeft}s` : "Loading..."}
          </Text>
          <TouchableOpacity
        className="bg-[#F8D8AD] rounded-lg py-3 px-4 mt-4 w-[90%] self-center">
        <Text className="text-[#312C51] text-xl text-center font-semibold">
          Confirm
        </Text>
      </TouchableOpacity>

        </>
      ) : (
        <Text className="text-red-400 text-lg">No queue assigned.</Text>
      )}
    </View>
  );
}
>>>>>>> b3256deed423b80c1701f8f6a07da6ef7a09fde9
