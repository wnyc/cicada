# Prep

#### Step 01

Go to RadioShack and get:

* An Arduino Uno REV3 Kit 
* A SideKick Basic Kit
* USB cable
* Wire
* Electrical tape

#### Step 02

Prepare your other parts and tools, like:

* Plastic baggie
* 12” long wooden dowel
* Scissors
* Glass of ice and water

#### Step 03

If you haven’t already, download and install Arduino on your computer. [link]

# Assembly

#### Step 04

Take the breadboard and the 9 330ohm resistors.

Put one 330ohm resistor in each odd row, connecting a socket in the blue [ - ] column to a socket in the A column next to it.

* [ - ]1 to A1
* [ - ]3 to A3
* [ - ]5 to A5
* [ - ]6 to A7
* [ - ]8 to A9
* [ - ]10 to A11
* [ - ]11 to A13
* [ - ]13 to A15
* [ - ]15 to A17

#### Step 05

Take the 9 LEDs.

The LEDs will express the temperature of the sensor in a pattern. 

They’re the only part in the kit that has “polarity” -- or positive and negative sides -- which means direction matters. The short leg on the LED is the cathode, or negative side. The long leg on the LED is the anode, or positive side.

#### Step 06

On the breadboard, make a column of 9 LEDs in the C column.

Short (cathode, negative) legs goes in odd rows. Long (anode, positive) legs goes in even rows.

#### Step 07

Take 9 red short cables.

Connect one cable from E2 on the breadboard to Digital 2 on the Arduino.

Connect one cable from E4 on the breadboard to Digital 3 on the Arduino.

Keep going like this:

* E6 to Digital 4
* E8 to Digital 5
* E10 to Digital 6
* E12 to Digital 7
* E14 to Digital 8
* E16 to Digital 9
* E18 to Digital 10

#### Step 08

Take the 5 10Kohm resistors.

Make a little ladder of them on the breadboard.

* [ - ]21 to C25
* D25 to A26
* D26 to A27
* D27 to A28
* D28 to A29

#### Step 09

Take the remaining red short cable.

Connect E29 to F30

#### Step 10

Take the green long cable.

Connect [ + ]25 on the breadboard to one of the GND sockets on the Arduino.

[ + ]25 is near the A30 socket.

#### Step 11

Take the white long cable.

Connect G30 on the breadboard to the A0 socket on the Arduino.

#### Step 12

Take a red long cable.

Connect [ + ]1 on the breadboard to the 5V socket on the Arduino.

[ + ]1 is near the J1 socket.

#### Step 13

Take the remaining red long cable.

Using scissors, cut it exactly in half. 

#### Step 14

Gently score the plastic sleeves on both ends (about half an inch from the tips) to reveal the wires.

You can use a wire wrapping tool for this step if you have one.

#### Step 15

Take the wire coil.

Measure out and cut 2 5-foot pieces. 

#### Step 16 

Score the plastic sleeves on both ends of both wires as well.

You can use a wire wrapping tool for this step if you have one.

#### Step 17

Connect the end of one red long cable to the end of a wire, and the other end of the wire to a leg of the thermistor.

You can use a wire wrapping tool for this step if you have one.

#### Step 18

Do the same for the other leg of the thermistor.

You can use a wire wrapping tool for this step if you have one.

#### Step 19

You should have a thermistor with very long wires to connect to the breadboard.

#### Step 20

Connect one end to J30, and the other to [ + ] next to it.

#### Step 21

Carefully lay the thermistor and its wires along the length of the dowel, with the thermistor flush against the end.

Using electrical tape, secure the wires to the dowel. Take special care to cover the exposed wire with tape.

#### Step 22

Take the plastic baggie and place it over the dowel and thermistor. The plastic should directly contact the thermistor, so secure it tightly.

#### Step 23

Cut off any excess and tape the plastic shut.

# Calibrate

#### Step 24

Load up the Arduino program and paste in this code. [link]

Connect the Arduino to your computer with the USB cable.

Hit the Verify button in the upper left.

Hit the Upload button in the upper left, to the right of the Verify button.

Disconnect the Arduino from the USB cable.

Quit the Arduino program.

Your Arduino is now programmed to take readings from the thermistor and display it via the 9 LEDs. But, its thermistor now needs to be calibrated!

#### Step 25

Take the glass of ice and water.

Submerge the tip of the dowel (with the thermistor) into the glass.

#### Step 26

Take a white short wire.

Connect the remaining GND socket to Digital 11, both on the Arduino board.

#### Step 27

Connect the Arduino to your computer with the USB cable.

The LEDs should flash for about 5 minutes or less.

When they have stopped flashing, disconnect the Arduino from the USB cable.

#### Step 28

Take the dowel out of the ice water and dry it off.

Place the dowel and thermistor under your arm.

#### Step 29

Take the white short wire on the Arduino board and move its end from the Digital 11 to the Digital 12 socket.

The other end stays in the GND socket.

#### Step 30

Connect the Arduino to your computer with the USB cable.

The LEDs should flash for about 5 minutes or less.

When they have stopped flashing, disconnect the Arduino from the USB cable.

#### Step 31

Remove the white short wire from the Arduino board.

If the LEDs have stopped flashing and only a few are lit, you are ready to deploy!

Deploy

#### Step 32

You can remove the thermistor, dowel and wires from the breadboard to leave in the ground.

#### Step 33

Using one end of the dowel, plunge it 8 inches into the ground.

#### Step 34

Take it out and place the thermistor-end of the dowel 8 inches into the ground.

#### Step 35

To take a reading, just plug the wires back into J30 and the [ + ] next to it on the breadboard.

The LEDs will light up. Take down their pattern and report it to WNYC!

The unit is shown powered by a 5V battery and battery adapter.
