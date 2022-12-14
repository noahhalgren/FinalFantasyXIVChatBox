
# FinalFantasyXIVChatBox

A twitch chat box modeled after the in-game chat box in Final Fantasy XIV!

The chat box is set up to perfectly mask the in-game chat box, allowing you to show off your own chat on stream while also covering up the in-game chat without breaking the look and feel of FFXIV


## How to use

Here is a step-by-step process of setting this chat box up for your stream!

1. Create a new Browser source. Name it whatever you'd like.

![Screenshot1](assets/readmeScreenshots/browserSource.png)

2. Paste the following link into the URL field of the browser source. Remember to put your username in the link or this will now work!!!

https://noahhalgren.github.io/FinalFantasyXIVChatBox?twitch=YOUR-TWITCH-USERNAME

![Screenshot2](assets/readmeScreenshots/browserSourceSettings.png)

3. **VERY IMPORTANT!!** Replace the custom CSS box with the following CSS:

```
html,body { font-size: 14px; }
img.emote { width: 14px; }
```

**If you skip this step, the background will not be transparent**. Additionally, you can modify the text size and emote size by adjusting the px numbers in this field.

![Screenshot3](assets/readmeScreenshots/customStyleSettings.png)

4. Ta-Da! Everything should be working now. Happy streaming warriors or light!

![Screenshot4](assets/readmeScreenshots/chatBoxWorking.png)
## Features

There are many features to mention but I dont have time to write them out with screenshots and all right now so sit tight please and thanks!
