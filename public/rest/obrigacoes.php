<?php
 	require_once("Rest.inc.php");
	
	class API extends REST {
	
		public $data = "";
		
		const DB_SERVER = "127.0.0.1";
		const DB_USER = "root";
		const DB_PASSWORD = "padaria123";
		const DB = "ceuy";
		private $db = NULL;
		private $mysqli = NULL;
		public function __construct(){
			parent::__construct();
			$this->dbConnect();
		}
		
		private function dbConnect(){
			$this->mysqli = new mysqli(self::DB_SERVER, self::DB_USER, self::DB_PASSWORD, self::DB);
		}
		
        public function obrigacoes(){
			$query="SELECT distinct o.id_obrigacao, o.nome_obrigacao FROM obrigacao o order by o.id_obrigacao";
			$r = $this->mysqli->query($query) or die($this->mysqli->error.__LINE__);
			if($r->num_rows > 0){
				$result = array();
				while($row = $r->fetch_assoc()){
					$result[] = $row;
				}
				$this->response($this->json($result), 200); // send user details
			}
			$this->response('',204);
        }
		
		private function json($data){
			if(is_array($data)){
				return json_encode($data);
			}
		}
	}
	
	$api = new API;
	$api->obrigacoes();
?>