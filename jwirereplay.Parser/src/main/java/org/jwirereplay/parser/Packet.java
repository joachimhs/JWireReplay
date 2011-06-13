package org.jwirereplay.parser;

import org.jwirereplay.parser.util.HeaderParseUtil;

public class Packet {
	private long sec = 0;
	private long usec = 0;
	private long inclLen = 0;
	private long origLen = 0;
	
	public static final Packet EOF = new Packet();
	
	public Packet() {
		super();
	}
	
	public Packet(byte[] packetHeaderArray) {
		super();
		sec = HeaderParseUtil.convertPcapHeaderInt(packetHeaderArray, 0);
		usec = HeaderParseUtil.convertPcapHeaderInt(packetHeaderArray, 4);
		inclLen = HeaderParseUtil.convertPcapHeaderInt(packetHeaderArray, 8);
		origLen = HeaderParseUtil.convertPcapHeaderInt(packetHeaderArray, 12);
	}

	public long getSec() {
		return sec;
	}

	public void setSec(long sec) {
		this.sec = sec;
	}

	public long getUsec() {
		return usec;
	}

	public void setUsec(long usec) {
		this.usec = usec;
	}
	
	public long getInclLen() {
		return inclLen;
	}
	
	public void setInclLen(long inclLen) {
		this.inclLen = inclLen;
	}
	
	public long getOrigLen() {
		return origLen;
	}
	
	public void setOrigLen(long origLen) {
		this.origLen = origLen;
	}
}
