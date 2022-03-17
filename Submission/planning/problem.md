# Chatbot

## Problem statement

Create a chatbot that will help surfers determine if they need to wax their board, and what type of surf wax to use. If they do not need to wax their board chatbot will either compliment or make a dig at their surfing skills. If they do need to wax their board chatbot will ask if the water temperature where they surf is warm or cold, then chatbot will reply with what the best type of surf wax is for them to use.
<br>
<br>

## Inputs, processes and outputs

<br>

### "Hi there, I am surfbot here to help you choose the right surf wax for your board so you can get back in the water and catch some epic waves, what is your name ?

<br>

    Inputs - "name" ()

    Process = collect "name" string for re-use in questions further down

    Outputs = respond with ...

<br>

### "Nice to meet you "name", lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?"

<br>

    Inputs - yes
           - no

    Process = if yes / no statement

    Outputs = if yes respond ...

<br>

### "Ok "name", thats good to hear your board has enough grip. Are you catching lots of good waves?"

  <br>

    if no respond ...

<br>

### "Well "name", Give your board a wax! So I know the right board wax to reccommend I need to know is the water temperature where you live warm (15°C and above), or cold (14°C and below?)".

<br>
<br>

## Next Level

---

<br>
<br>

### "Ok "name", thats good to hear your board has enough grip. Are you catching lots of good waves?"

 <br>

    Inputs = yes
           = no

    Process = if yes / no statement

<br>

    Outputs = if yes respond ...

### "Well you dont need to wax yours board you bloody surfin turfin legend"

  <br>

              if no respond ...

### "Well then "name", you must suck."

<br>
<br>

## Tree Split

---

<br>
<br>

### "Well "name", Give your board a wax! So I know the right board wax to reccommend I need to know is the water temperature where you live warm (15°C and above), or cold (14°C and below?)".

  <br>

    Inputs = warm
           = cold

    Process = if warm / cold statement

<br>

    Outputs = if "warm" respond ...

<br>

### "Ok "name, I would reccommend you use xxx tropical surf wax"

 <br>

        = if "cold" respond ...

<br>

### "Ok "name, I would reccommend you use ccc cold water surf wax"

---

<br>
<br>

# Test scenarios

Start: "Hi there, I am surfbot here to help you choose the right surf wax for your board so you can get back in the water and catch some epic waves, what is your name ?

Input: Ayrton

Output: "Nice to meet you Ayrton, lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?"

Input: no

Output: "Well Ayrton, Give your board a wax! So I know the right board wax to reccommend I need to know is the water temperature where you live warm (15°C and above), or cold (14°C and below?)".

Input: cold

Output: "Ok Ayrton, I would reccommend you use ccc cold water surf wax"

Input: r

Output: (returns to start).

---

Start: "Hi there, I am surfbot here to help you choose the right surf wax for your board so you can get back in the water and catch some epic waves, what is your name ?

Input: Billybob

Output: "Nice to meet you Billybob, lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?"

Input: yes

Output: "Ok Billybob, thats good to hear your board has enough grip. Are you catching lots of good waves?"

Input: no

Output: "Well then Billybob, you must suck."

Input: r

Output: (returns to start).

---

Start: "Hi there, I am surfbot here to help you choose the right surf wax for your board so you can get back in the water and catch some epic waves, what is your name ?

Input: Timjim

Output: "Nice to meet you Timjim, lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?"

Input: yes

Output: "Ok Timjim, thats good to hear your board has enough grip. Are you catching lots of good waves?"

Input: yes

Output: "Well you dont need to wax yours board you bloody surfin turfin legend"

Input: r

Output: (returns to start).

---

Start: "Hi there, I am surfbot here to help you choose the right surf wax for your board so you can get back in the water and catch some epic waves, what is your name ?

Input: Flimflam

Output: "Nice to meet you Flimflam, lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?"

Input: no

Output: "Well Ayrton, Give your board a wax! So I know the right board wax to reccommend I need to know is the water temperature where you live warm (15°C and above), or cold (14°C and below?)".

Input: warm

Output: "Ok "name, I would reccommend you use xxx tropical surf wax"

Input: r

Output: (returns to start).

---

Start: "Hi there, I am surfbot here to help you choose the right surf wax for your board so you can get back in the water and catch some epic waves, what is your name ?

Input: John Key

Output: "Nice to meet you John Key, lets start with a few questions to help me give the best advice. Firstly, does your surfboard maintain good grip?"

Input: yes

Output: "Ok John Key, thats good to hear your board has enough grip. Are you catching lots of good waves?"

Input: no

Output: "Well then John Key, you must suck."

Input: r

Output: (returns to start).
