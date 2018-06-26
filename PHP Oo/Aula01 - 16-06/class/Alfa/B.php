<?php
require_once 'A.php';

class B extends A
{
	public function Baz($y)
	{
		$this->foo = $y;
		return $this->methods($this->foo);
	}
}