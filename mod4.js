// Iterate over an array of names
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];

    // Check if the name starts with 'j' or 'J'
    if (name.startsWith('j') || name.startsWith('J')) {
        // Say "Goodbye" to the name
        byeSpeaker.speak(name);
    } else {
        // Say "Hello" to the name
        helloSpeaker.speak(name);
    }
}
