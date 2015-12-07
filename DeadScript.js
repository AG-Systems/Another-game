function OnTriggerEnter(other : Collider){
	if(other.tag == "Player"){
		Application.LoadLevel("DeadScreen");
	}
} 
