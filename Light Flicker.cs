var flickerSpeed : float = 0.1;
 
while (true) {
    light.enabled = true;
    yield WaitForSeconds (flickerSpeed);
    light.enabled = false;
    yield WaitForSeconds (flickerSpeed);
}
