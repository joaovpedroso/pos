<?php

class A
{
	private $foo;

	public function methods($x){
		$this->bar($x);
	}

	private function bar($x)
	{
		return $x;		
	} 
}