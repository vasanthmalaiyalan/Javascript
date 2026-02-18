switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly");
        break;
    case "cloudy":
        console.log("don't Go Outside");
        break;
    default:
        console.log("Unknown weather type!");
        break;            
}