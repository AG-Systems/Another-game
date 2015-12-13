public var loadLevelPlate : GameObject;
public var loadLevelName : String = "Demo1";

public var startButtonName : String = "Start_Button";
public var exitButtonName : String = "Exit_Button";


//UNCOMMENT all below to activeate objective and story button content
function Awake (){

	if(!loadLevelPlate)loadLevelPlate = GameObject.Find("Plate_Loading");
	if(!loadLevelPlate)Debug.LogError("No Loading Screen Panel Loaded");
}

function Start(){
	Screen.lockCursor=false;
}


function OnMouseEnter () {
	guiTexture.color = Color (1,1,1);
}

function OnMouseExit (){
	guiTexture.color = Color (.5,.5,.5);
}

function OnMouseDown(){
	

	if (name == startButtonName){
		
		if(loadLevelPlate)loadLevelPlate.guiTexture.enabled = true;
		Application.LoadLevel (loadLevelName);
	}

	if (name == exitButtonName){
		Application.Quit();
	}
	

}
